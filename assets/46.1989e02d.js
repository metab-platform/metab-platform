const a=[.14,0,.01,.88,0,.3,.49,.97,0,.76,0,.54,.11,.02,0,.51,.14,.85,.31,.31,.39,.45,.06,0,0,0,.27,.13,.01,.02,.04,.39,0,.07,0,.98,0,0,.98,0,.15,0,.71,.53,.93,0,.2,.38,0,.52,.01,.74,.02,0,.26,0,0,.06,.45,0,.2,0,.03,.97,.03,.12,0,0,.02,.71,.86,0,.36,.22,0,.94,.06,.08,0,.37,.21,0,.55,0,.26,.24,0,.46,0,0,0,.38,.26,0,.04,.02,.06,.07,.01,.08,.59,0,.69,.52,.84,.28,.39,.06,0,.56,.56,.78,.45,.01,.54,0,.48,.1,.48,0,.91,.37,.24,.39,.27,.59,0,.04,.4,0,.02,.32,.45,.43,.04,.76,.01,.84,.04,.25,.03,.48,.13,0,.8,.91,.75,0,.03,.71,0,.14,.79,.12,.26,0,.63,.37,.94,0,0,.79,.9,.44,.28,.06,.09,.21,0,0,.87,.44,0,.14,.24,0,.75,0,.05,0,.14,.88,.04,0,.9,.06,0,.42,0,.32,.08,.35,.43,.08,.11,0,.83,.81,.2,.76,0,0,0,.06,.61,.33,.11,.04,.17,.14,.1,0,.85,0,.07,.17,.66,.49,0,0,.96,.38,.3,0,.16,0,.04,.07,.61,.17,.84,.15,0,.06,.53,.93,0,0,0,.35,.7,0,.42,0,.27,.86,.49,.13,.74,.21,.05,.79,.18,.94,.02,.66,.22,0,.44,0,.03,0,.03,.02,0,.64,.73,0,0,0,.07,.35,0,.04,0,.25,0,.22,.08,0,.01,0,0,.03,.12,0,0,0,0,.23,.63,.01,0,.44,.5,.48,0,.42,.64,.01,.84,0,.17,.94,.97,.12,.88,.39,0,0,0,.06,.22,.64,.88,0,.01,0,.17,.53,.01,.61,0,0,.04,.04,0,0,.7,.1,.42,.14,.6,.92,.73,.33,.27,.43,.04,.4,.5,.45,.03,.57,0,.03,.91,.01,.6,.99,.15,0,.13,.06,.31,0,.91,.93,.26,0,0,.76,.02,.14,.71,.02,.66,0,0,.65,.02,.08,0,0,.07,.31,.84,.01,.23,0,.06,.93,.19,.78,.84,.26,.55,.76,0,0,.04,.07,.52,.52,.07,0,.61,.05,0,.23,.09,.07,.03,0,.02,.76,0,.14,.1,.37,.11,.51,.01,.04,.15,.14,.04,.02,.01,.47,.72,0,.05,.33,.03,0,0,.38,.01,0,.36,0,0,.91,0,0,.76,0,0,.29,.65,0,.03,0,.97,.18,0,0,.01,.44,0,.6,0,.03,.66,0,.02,0,.01,0,.08,.02,.05,.05,.87,.1,.1,.71,.09,0,.02,0,.01,.03,0,0,.01,.01,0,0,.28,0,.05,.08,.99,.05,.39,0,.12,.32,.08,.67,.48,0,.07,0,.05,.16,.01,0,.04,0,.03,0,0,.02,0,0,0,.03,.02,.38,0,.04,.51,.57,.14,.82,.03,0,.23,.02,.34,.13,.07,.72,.06,.93,.28,0,.35,.02,.28,.04,.96,.49,0,.1,0,.57,.97,0,.31,0,.1,.46,.51,0,.03,0,.01,0,0,.01,.02,.25,.58,.01,.31,.15,0,.06,.96,.83,.34,.56,.24,.51,.12,.86,.27,.1,0,.45,.01,0,.59,.8,.03,.5,.06,.06,.5,.02,.99,0,0,.73,.09,0,.94,.96,.8,.19,.67,0,0,.02,.36,.12,.01,0,.06,.67,.17,.34,0,.54,.23,0,.79,0,.01,.43,.03,.05,0,.89,.13,.5,0,.54,0,.48,0,.82,.32,0,.41,.82,.67,.01,.5,.01,.36,.3,0,.03,.3,.41,.12,0,.6,.27,.65,.01,0,.01,.96,.81,.41,0,.27,0,0,.85,0,.23,.14,.4,0,.38,0,0,.08,.61,.3,.02,0,0,0,.9,.38,.03,.41,0,.09,0,.43,.82,.3,0,.1,0,0,.23,.05,0,0,.87,.3,.06,0,.4,.02,.63,.06,.04,.11,.03,0,.31,.15,.01,.29,.99,.06,.63,.66,.27,0,.16,.71,.33,.11,.36,.04,.27,.62,.85,.27,.11,0,.82,0,.1,.45,.83,.48,.54,.14,.54,0,.35,.49,0,0,.1,.39,.11,0,.25,.91,.01,.49,.63,0,0,.61,.56,.3,.08,.19,.97,0,.27,.79,.03,.03,.5,.02,.15,0,.43,.05,0,.01,.03,0,.96,0,0,0,.91,0,.4,.49,.11,0,0,.01,.2,.39,.01,.07,.96,.33,.19,.94,.15,.7,0,.99,0,0,.51,0,.03,0,.02,.05,.74,.51,.13,0,.03,0,.75,0,.67,.98,.01,0,.99,.15,.11,.02,.01,.14,0,.11,0,.56,0,.74,0,.02,.99,.6,.34,.01,0,0,.1,.05,.19,.85,.67,.27,.03,.44,0,.43,.02,.05,.09,.01,.02,.37,.03,.44,.1,0,.98,.28,.14,0,0,.4,.06,.05,0,1,.05,0,0,.36,.72,.86,.34,.09,.09,.29,0,0,0,0,.57,.45,.89,.08,0,0,0,0,.66,0,.06,.09,.79,0,0,.25,.07,.03,.86,.02,.06,.26,0,.29,.05,.93,.32,.69,0,.1,0,.43,0,.14,.01,.04,0,.78,.95,.2,.06,.02,.49,0,.93,.32,0,.07,.04,.59,0,.01,0,.4,0,0,0,.04,0,.39,.37,.09,0,.04,.44,0,0,.75,.05,.12,0,.12,.05,.86,.84,.06,.8,.15,.02,0,0,.01,.67,0,.6,.89,.63,.28,.25,.71,.53,.05,.76,.24,0,0,.1,.02,.07,.57,0,.13,0,0,.02,.07,.82,.6,.55,0,.14,.31,.06,.66,.14,.06,.41,.92,0,.16,.25,.86,.78,.42,.22,.48,.31,.11,0,.34,.62,.37,.91,0,.7,.01,0,0,0,0,.05,0,.62,.01,.03,0,.2,.51,0,0,.9,.24,.6,0,.73,.57,.17,.17,.17,0,.6,0,.53,.37,0,.09,.48,.59,0,.21,.3,.35,.87,0,.01,.58,.64,.01,.81,.14,.59,0,0,0,.35,.25,0,0,.56,.29,0,.01,.33,.77,.56,.09,0,.97,0,0,.39,.66,0,.8,.71,.7,.66,.09,.01,.47,.29,.36,0,.1,0,.06,1,.3,.85,.56,.08,0,.03,.99,.32,0,0,.01,0,0,.95,.04,.69,.8,.05,.14,.79,.38,.43,.32,0,.17,0,.07,0,.16,.37,.92,.49,.59,0,0,.96,0,0,0,.52,.18,.01,0,0,.67,0,0,.01,.33,.55,.02,.64,0,0,.16,0,.89,.15,.09,.27,.05,0,.8,.35,.64,.7,0,.02,.39,.04,0,.48,0,0,.26,.08,.04,.24,0,.06,.62,.42,0,.33,0,.25,0,.58,.16,0,.31,.93,0,0,.49,.02,0,.85,.05,.76,0,.36,.22,.12,.24,0,.09,.11,.86,.01,.03,.33,0,.06,.2,.07,.02,.43,.62,.12,0,0,.05,0,.45,0,.01,0,0,.72,.72,0,.3,0,0,0,.04,0,.03,.91,.02,0,0,.66,.76,.52,0,0,.01,.54,.81,.63,.15,.87,0,.82,0,.96,.37,0,.06,0,.33,.35,.8,.47,.14,0,.02,.3,.31,.05,.22,.15,.69,.29,0,.47,.01,0,.12,.31,.49,.46,.79,.07,.99,.38,0,.03,0,.84,0,.08,.34,.2,0,0,.01,.61,0,0,.87,.59,.02,.84,0,.02,0,.37,.39,0,.07,0,0,.15,.73,0,0,.63,.04,.07,.42,0,0,.34,.56,0,.11,.68,0,0,.01,.01,.73,.01,.41,0,0,.37,0,.24,.01,.01,.56,.02,.01,.04,.25,0,.04,.92,.09,.34,.27,.04,.26,.69,.61,0,.16,.69,.43,.56,0,.35,.09,.03,.19,.73,.01,.88,.02,.09,.96,.31,.25,.17,.2,0,.1,.22,.66,.01,.28,.62,.56,.92,.69,.84,.72,.08,.07,.66,.95,.01,.09,.21,.08,.07,0,0,.01,.01,0,.43,0,.11,.13,.01,.01,0,.21,.34,.49,.36,.02,0,.77,0,.03,0,.11,.92,.23,.17,0,.36,.12,.39,0,.11,0,.69,.07,0,.52,.24,0,0,0,0,.93,.74,.97,.13,0,0,.16,0,.87,.13,.94,.05,.25,.01,.84,.8,.3,0,0,0,0,.09,.13,.59,.8,0,.01,.33,.59,.02,.42,.81,.13,.08,0,.42,.28,.17,.25,.38,.49,.21,.67,.29,0,.01,.18,.15,.23,0,.05,.33,.92,.07,.02,.02,.34,.15,0,.32,.58,.66,.45,0,.23,.57,0,.01,.02,.68,0,.55,0,0,0,.1,.03,.41,.16,.49,0,.09,.24,0,0,0,.7,.39,.12,.92,0,.45,.78,.23,0,0,.41,.02,.3,.54,0,0,.47,0,0,0,.11,.24,.01,0,0,.19,0,.3,.05,.3,.08,.16,.6,0,.01,.03,.01,.01,.26,.7,.4,.01,.46,.08,0,.61,0,.69,.01,.12,0,.01,.84,0,.01,.24,.91,0,.03,.62,.05,.11,.28,1,.86,.01,.05,0,0,.09,0,.56,.01,.31,0,.19,.06,0,0,.29,.98,.85,0,0,.64,.93,0,.15,.99,.02,.07,.05,0,.18,.03,.34,.75,.02,.04,0,.62,.81,.07,.07,.73,.29,.28,.19,.01,.24,.01,.41,.14,.47,.3,.2,0,.17,0,0,0,0,.95,.41,.05,.27,.63,.03,.61,0,0,.08,0,.84,.74,.28,.96,0,.96,0,.01,.02,0,.68,0,.75,.63,.33,0,.87,0,.2,.07,.97,.19,.38,.03,.08,.21,0,.35,.2,0,.4,.59,0,.68,.6,.54,.61,.42,.93,.3,0,0,0,0,.02,0,0,0,0,0,.91,.47,0,0,.91,.29,.51,.94,.92,.68,0,.07,.07,.52,0,.61,.61,0,0,.1,0,0,.66,.18,.73,.53,.23,.25,.01,.02,.05,.1,.36,.76,0,.72,.69,.03,.46,.06,.32,0,.09,0,0,.7,.46,0,0,.02,.37,.59,0,.12,.31,.67,.05,.62,0,.26,.34,.88,.06,.51,.23,.11,0,0,.74,.07,.6,.15,.7,.16,.02,0,0,.38,0,.01,.63,.06,.95,.23,.13,0,0,0,.53,.71,.83,.21,.49,0,.03,0,0,.02,.01,0,.86,.68,.64,0,0,.05,.07,0,0,.28,.18,.72,.9,.86,.01,0,.55,0,0,0,.13,.78,0,.61,.06,.04,.6,.33,.98,.11,.68,.78,0,0,.23,.68,0,.19,0,.08,0,.02,.62,.8,.33,0,.96,0,0,0,.19,.02,.71,0,.03,.52,0,.04,0,.09,.15,0,.56,0,.01,0,.69,0,.68,.08,.01,.12,0,.33,.81,.83,0,.29,.99,.13,.02,.13,.11,.05,.26,.02,.04,.39,.64,.3,.24,0,.01,.13,0,0,.4,.03,.1,.06,0,.01,.04,.96,.81,.13,.2,.86,.01,0,.34,.58,0,.38,.01,0,0,.24,.06,0,.12,.04,0,.51,0,0,.83,.09,.04,0,.45,.58,.83,0,.03,0,0,.15,.01,.01,0,0,0,0,.08,.4,.46,0,0,0,.57,.75,.75,0,0,.57,0,.54,0,0,.03,.42,.6,.16,.16,.68,.18,.43,.18,.01,.01,0,.86,.17,.75,.04,0,.08,.91,.55,0,0,.69,0,0,.02,0,.01,.16,0,0,.19,.77,0,0,0,.09,0,.12,.07,.19,.26,.03,.76,.01,.03,0,.06,0,0,0,.05,0,0,0,.33,0,0,0,0,0,.29,.35,0,.86,0,0,.67,0,.34,.92,.53,.08,0,0,.99,.28,.03,0,.02,.66,.1,0,.02,0,0,.53,.18,.68,.17,0,0,.61,0,.82,.64,.38];export{a as pvalData};
