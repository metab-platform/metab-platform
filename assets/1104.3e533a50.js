const a=[.38,.01,.55,.22,.03,.19,.18,0,0,.97,0,.14,.84,.06,0,.77,.05,.88,.04,.05,.71,.11,.21,0,0,0,.03,0,.31,.07,.02,.1,0,.42,.88,.08,0,0,.08,.15,.08,0,.73,.34,.89,0,.06,.37,.23,.01,0,.8,.11,0,.97,0,0,.24,.54,0,.07,0,0,.78,.06,0,0,0,.66,.86,.86,.01,.05,.01,0,.57,.52,.08,.34,.13,.16,0,.23,0,.03,.03,0,.08,0,0,.08,.94,0,0,.34,.54,0,.3,.13,.01,.88,0,.09,.66,.01,.58,.24,.01,0,.05,.08,.1,.55,.07,.06,0,.93,.03,.86,0,.35,.46,.13,.31,.78,0,.07,.6,0,0,.36,.11,.39,.96,.3,.08,.45,.43,0,.65,0,.17,0,0,.25,.93,.13,.05,0,.86,0,0,.49,.29,.01,.13,.21,.35,.39,0,.02,.07,.76,.22,0,.02,.19,0,.87,0,.41,0,.69,.93,.07,.03,.26,.9,.05,0,.11,.2,.07,.51,.17,.96,.89,.11,.65,.1,.26,.02,.25,0,0,.09,.33,.27,.91,.02,0,0,0,.55,.42,.5,.51,.23,.41,.67,.15,0,.08,0,.23,.04,.85,.01,.07,.34,.28,.04,.21,0,0,0,.39,.01,.95,.82,.86,.17,0,.97,.74,.23,0,0,.47,.6,.13,0,.04,.37,0,.07,.7,.09,.66,.93,.41,.45,.85,.23,.02,.34,.12,0,.95,.57,.53,.02,0,.01,.05,.02,.56,0,.02,0,.07,.87,0,.51,0,.67,.52,.01,.01,.22,.97,.93,0,.02,.99,0,.99,0,.98,.12,.3,.35,0,.02,.03,.93,0,.15,.2,.48,.89,.15,.06,.54,.95,0,.64,.02,.18,0,0,.58,.18,.28,.06,.43,.6,.14,.9,.78,0,.05,0,0,.54,.36,.01,.06,.29,.29,.3,.01,.2,.94,0,.65,.03,.15,.06,.42,0,.62,.25,.13,0,.53,.81,.65,.92,.16,0,.46,.37,.51,.35,0,.77,.08,.13,.38,0,.32,.64,.01,.66,.42,.92,0,.46,.95,.8,.31,0,.16,.87,.23,0,0,.93,.5,.27,.57,.45,.22,.31,.25,.04,.09,.08,.03,.14,.69,.9,.95,.49,.16,.25,.68,.05,.93,.02,.44,.39,0,.78,.24,0,.4,0,.28,.71,.08,.01,.07,.06,.52,0,.16,.91,.3,.2,0,.36,.68,0,0,.06,.13,.23,.07,.04,.4,0,.99,.17,0,.17,.01,0,.01,.09,0,0,0,.14,.07,.1,.01,0,.02,0,.01,0,.98,.16,.09,.41,0,.45,0,.04,.08,.07,.02,.01,.98,.07,.94,0,0,.01,0,.28,.19,.54,0,.03,0,.25,.67,.04,0,.54,0,.23,.93,.98,.02,.3,.55,.6,.14,0,0,.41,0,.39,.2,0,.21,.84,.34,.07,0,0,.28,.01,0,.18,.96,0,.37,0,.97,.3,.18,.25,.07,.01,0,.03,.39,.06,.72,.9,.75,.81,.94,.01,.03,.29,.57,.53,.49,.75,.39,.79,.81,.03,.55,.55,.12,.45,.28,.23,.09,.2,.22,.05,.28,.5,0,.08,.89,0,.17,.1,.52,.09,.98,.54,.21,0,0,.27,.91,.95,.23,.32,.91,.8,.57,0,.9,0,.12,.67,0,.75,.38,.26,.5,0,.53,.02,0,.06,.01,.33,.01,.19,.6,.87,.12,0,0,0,.06,.04,.92,.01,0,.37,.02,.41,.03,.17,.98,.82,.36,.56,0,.15,.03,.2,.52,.13,.06,.58,.86,.74,.92,.43,.44,.6,0,0,.14,.01,.18,.81,.5,.23,.14,.74,.03,0,.94,.63,.06,.59,0,.1,0,.28,0,.02,0,.76,.04,.94,0,.96,.02,0,.61,0,.66,.96,.02,.18,.98,0,.06,.5,.95,.34,.96,0,0,0,.24,.25,.07,.48,0,0,0,.01,.28,.36,.04,.38,0,.4,.4,.13,0,0,.05,.86,.04,.03,.71,.91,0,.95,.15,.07,.02,0,0,0,.07,.49,.46,.91,.83,.7,.2,0,.95,.9,.18,.08,.83,0,.08,.39,.86,0,.13,.01,.22,0,.51,0,.03,.1,.69,.06,.78,.03,.05,0,.34,0,.91,0,.52,0,.73,.14,.26,.07,.63,0,.01,.07,0,.21,.53,.09,.01,.01,.64,.86,.38,.17,.74,.13,0,0,.21,.25,0,.01,.11,.04,0,0,.03,.01,.21,.6,.82,.28,0,.01,.6,.24,.18,.31,0,.84,.26,.42,.15,.02,.63,.09,.99,.71,0,0,0,.22,0,.69,.63,0,.06,.13,.01,.01,0,0,.01,.18,.79,.39,0,.05,.06,0,.39,.06,.65,.96,0,.45,0,0,0,.08,0,.57,.56,.55,.51,.05,0,.31,.01,.09,.83,.29,.97,.59,.04,.35,0,.68,.63,.56,.1,0,.5,0,.69,.28,.04,0,.98,.25,.88,.07,.16,0,.33,0,0,.84,.17,.11,.01,.04,.41,.03,.09,.27,.77,.4,.46,.27,.1,.47,.45,.44,.21,.04,.01,.43,0,0,.19,.65,0,.18,.02,0,.02,.21,.07,.09,.15,.05,.13,.66,0,.15,.8,.12,.04,.44,0,0,.39,.37,.66,.53,.29,.07,.15,.03,.14,.64,.79,.99,.54,.48,1,.41,0,.1,.05,.9,.02,.02,.13,.05,.58,.03,0,0,.03,.02,.4,.01,0,.81,.07,.24,0,.48,0,0,.04,.22,.04,.01,.09,.75,.4,.55,0,0,0,0,.71,0,.04,.02,.53,.07,.37,.42,.29,.16,.94,.18,.07,0,.08,0,0,.95,.09,.09,.02,0,.67,.01,0,.15,.04,.03,.64,.79,.22,0,.84,.62,.19,.45,.69,.21,.57,.22,.81,.45,.84,.12,.13,.96,.08,.72,.83,.05,.22,.06,0,.04,.7,.1,.47,0,.44,.03,.93,0,0,.01,.77,.39,.82,.01,.19,.31,.61,.18,.4,.42,.68,.78,0,0,0,.03,.22,.61,.03,.47,.71,.68,.35,.82,.8,.01,.25,.65,0,.78,.49,0,.15,.01,.49,.07,0,.99,.87,.59,0,.06,.31,0,0,.64,.8,.95,0,.06,.43,.75,.02,.05,.41,.02,0,.27,.08,.99,.76,.02,.65,.12,.75,.15,0,.29,.01,.01,.05,.67,0,0,.37,0,.01,.03,.93,.37,0,.19,0,.24,.74,.24,.57,.29,.5,.05,.49,.35,.38,.46,0,.73,0,.29,0,.33,.96,.63,.64,.46,0,.1,.79,.27,.06,.01,.87,.23,.04,0,.44,.12,.81,0,.46,.07,0,0,.3,0,.16,.41,.11,.22,.54,.08,.68,.31,.2,.3,.49,.89,.21,0,0,.58,.06,0,.46,0,0,.17,0,.08,.2,0,.85,0,.68,0,.27,0,0,.42,.36,.32,0,.12,.19,.01,0,.19,.97,.4,.44,.7,.81,0,.43,.11,.02,.1,0,.24,0,.91,.02,.86,.02,.35,.83,.41,.3,.39,.82,.35,.61,0,.21,0,0,.03,.01,.13,0,0,.25,.23,.29,.59,.91,.76,.06,0,.01,.03,.75,.07,0,0,.61,.22,.31,0,0,.18,.63,.23,.88,.81,.63,0,.68,0,.18,.75,.11,.23,0,.02,.16,.02,.21,.01,.09,0,.69,.19,.35,.01,0,0,.93,0,.56,0,0,.33,.4,.7,.07,.08,.49,0,.86,0,0,0,.24,.13,.39,.43,.45,0,0,0,.01,0,.12,.63,.47,0,.06,0,0,0,.08,.28,0,.02,.33,0,.25,.93,.14,.01,.23,.93,0,.73,0,0,.19,.14,.42,.67,0,.2,.14,.41,0,.67,.7,.77,.05,0,0,.52,.01,.75,.17,.33,0,0,.91,0,0,.15,.45,.64,.01,.73,.3,.07,.68,.12,0,.43,.82,.87,.17,0,.91,.39,0,.52,.71,.02,.81,0,.44,.2,.19,.01,.37,.37,0,.52,.12,.27,0,.56,.48,.05,.61,.45,.06,.29,.4,.42,.25,.04,0,.14,.34,.25,.06,0,.57,.95,0,.09,.85,.55,.11,.44,.47,0,0,0,.12,.67,.11,.17,.06,.17,.96,.44,0,.5,.51,.41,.64,0,.76,.39,.11,.05,.02,.48,.14,.6,0,.56,.9,0,1,0,0,.82,.35,.25,.34,.55,.03,.55,0,.61,.98,.52,.36,.08,.79,.4,.96,.48,0,0,0,.11,.62,.31,.58,.1,.8,.03,.2,.47,0,.38,.73,.96,.86,.37,.82,.2,.41,.01,0,.01,.34,.06,.24,.98,.37,.74,.22,.09,0,.24,.63,.82,.02,.14,.01,0,.61,.31,0,.3,.62,.71,0,.49,.44,0,.84,.01,.4,0,.01,.42,0,0,0,0,.03,.97,.35,0,.42,.23,0,.47,.7,.02,.09,.24,.54,0,.1,.64,.18,.17,0,.12,0,.02,.37,.54,.11,.02,.14,.02,.22,.44,.01,.16,0,.54,.02,0,.1,0,0,0,.06,.38,.56,0,.49,.08,0,.99,0,.22,0,.37,.4,0,.08,0,.5,.04,.43,0,0,.24,.01,.29,.03,.03,0,.23,.89,.08,.19,.01,0,.18,0,.46,0,0,.42,.15,.36,0,.16,.08,.24,.03,0,.37,.02,.41,.05,.01,.17,.3,.57,.61,0,0,.86,.29,0,0,.17,.18,0,.35,0,.68,0,.88,.16,0,.66,.04,.21,.16,0,.26,.36,0,.76,.04,.03,.95,.03,0,.01,0,0,.21,0,.03,.58,.06,.65,.63,0,.05,0,.03,.1,.08,.13,.6,.04,.05,.51,.91,.01,.26,.11,.1,.84,.36,.41,.01,.03,0,0,0,.74,0,.92,.04,.65,.74,0,.21,0,.52,0,0,.13,.33,0,.79,0,.75,.19,.69,.29,.42,0,.09,0,0,0,0,0,0,0,0,.15,.93,.36,0,.06,.85,.29,.23,.3,.63,.06,.66,.79,.23,0,.53,.94,0,.83,.02,0,0,.67,.24,.05,.35,.88,.8,.99,.09,.02,.79,0,.28,.01,.27,.35,.49,.99,.06,.05,.41,0,.07,.21,.86,.01,0,0,.1,.68,.1,0,.05,.25,0,.77,.51,.02,.98,.43,.5,.79,.03,.11,.15,0,.16,0,.79,.08,.01,.37,0,.01,.09,0,.22,0,0,.36,0,.06,0,.02,0,.06,0,0,.2,.02,.11,0,0,.16,.14,.05,0,.87,0,.41,.22,.31,0,.02,0,.88,.02,0,.21,.61,.41,.73,.02,.01,.01,.35,.4,.02,0,0,.13,.44,.6,.76,.37,.94,.25,.99,.54,.2,.32,0,.04,0,.99,.01,.33,0,.5,.28,0,.59,.87,.77,0,.41,.03,0,.5,.21,0,.61,.04,.09,.97,0,.11,.32,0,.07,.9,.45,0,.62,0,.26,0,.82,.05,.28,.84,.02,.19,.32,.96,0,.51,.24,.01,0,.06,.78,.04,.83,0,.38,.04,.18,.33,.44,0,.26,.6,0,0,.01,.74,.2,.01,0,.32,.76,.03,.04,.01,.16,.82,0,0,.34,.4,.08,.74,.36,0,.17,.16,0,.1,.37,.25,0,.03,0,.11,.64,.71,.51,.08,.24,.52,.3,.48,.3,0,0,.62,.39,.84,.27,0,0,0,.95,.92,.08,0,.02,.63,.77,.95,.24,0,0,.76,0,.68,.77,.04,.09,0,.59,.42,.02,.36,.24,.71,.03,.05,0,.06,.01,.45,0,.63,.07,.93,.1,.02,0,0,.12,.59,0,.34,.63,0,.28,.47,0,.66,.19,0,0,0,.12,0,.48,0,.03,.07,.01,0,0,.39,0,.03,0,0,.01,.52,0,.44,.55,.52,0,0,0,0,0,.91,.01,.15,.75,.01,0,.32,.2,.2,.4,.02,.2,0,0,.17,.09,.17,.89,.03,.95,.21,.02,0,.05,.1,.34,.11,.45,.49,0,.23,.02,0,.19,.07,.01];export{a as pvalData};
