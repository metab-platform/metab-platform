const a=[.02,.2,.07,.41,.09,0,.12,0,.15,.01,.05,.56,.45,.76,.03,.89,.95,.99,.03,.14,.49,.84,.27,.01,.73,.71,.06,.65,.09,0,.16,.5,.19,.13,.06,.12,0,0,.86,0,.18,.4,.6,.82,.32,0,.32,0,.23,0,.21,.06,0,.8,0,.24,.31,0,.79,.71,.01,.27,.33,.62,.73,0,.72,0,.53,.6,.89,0,0,.15,.07,.66,.47,.01,.39,.41,.3,.58,.16,.91,.95,.27,.49,.98,.24,.19,0,.48,0,.83,.89,0,.86,.76,.02,0,.42,.34,0,.63,0,.38,.32,.39,.72,.05,.23,.08,.14,.53,.05,.14,.01,.04,0,.18,.87,.09,.29,.09,.84,.01,.2,0,0,.01,0,.01,.08,.13,.67,0,0,.12,0,.23,.76,.06,.27,.56,.01,.16,.24,0,0,.48,.36,.02,.12,.41,0,0,.27,.63,.12,.03,.01,0,.44,.08,0,.01,.91,0,0,.53,0,.09,0,.49,.2,.13,.06,0,0,.23,.71,.43,.64,0,.07,.04,.52,.54,0,.14,.53,0,.12,0,.11,.54,0,0,.84,.89,.23,.11,.03,.39,.21,.01,.4,0,0,.37,0,.02,.53,.03,0,.01,.39,0,.02,.04,0,0,0,.66,.02,.01,0,.04,.01,.58,.47,.7,.05,.04,.01,.01,0,0,.24,.95,.23,.01,0,0,0,.01,.81,.51,.86,.73,0,.24,0,0,.93,.17,.57,.05,.29,0,.07,.02,0,.95,0,0,.42,.35,.05,.86,.36,.87,.07,.06,.71,.42,0,0,.62,.36,0,0,.24,.47,0,.29,0,.02,0,.37,0,.02,.9,.04,0,.43,0,.51,.06,0,.39,.02,.18,.38,.97,.75,0,.06,0,0,.61,.83,.81,0,.01,0,0,.01,.13,.61,.67,.74,.01,.47,.06,0,.97,.83,0,0,.92,.16,.37,.08,.07,.31,0,0,.4,.01,0,.91,.34,.63,0,.16,.68,0,.87,.11,.01,0,.05,0,.01,.34,.48,.28,.75,0,.88,.82,0,.56,.5,.09,.05,.01,.03,.11,.63,.55,.55,0,.12,0,.38,.28,.02,0,.92,.32,.97,.33,.12,.09,.24,.49,.97,.48,.85,.49,.15,.76,.28,.03,.86,.91,.64,.84,.7,0,.37,.01,.02,.37,.02,.84,.01,.01,.08,.71,.03,.97,.01,.79,.61,.75,0,.14,0,.03,.35,.55,0,.06,.01,.1,0,.21,0,0,.09,.03,0,0,.63,.59,.21,0,.02,.89,.92,.65,.33,0,.01,.75,.05,.06,.05,0,.41,0,.66,0,.86,.01,0,.18,.46,.44,.14,0,.94,0,.96,.58,.33,.67,.18,0,.92,.47,0,.2,.96,.01,.37,0,.04,0,1,0,.11,0,0,0,.74,.05,.75,.47,0,.29,.36,.28,.03,.1,.25,0,0,.25,.62,.57,.67,.11,0,.01,.07,.06,.26,0,.15,0,.21,.87,.12,0,0,.25,.18,.25,.01,.12,.01,.04,.97,.23,.85,.68,0,.01,.87,.09,.02,0,0,.07,0,.9,.69,.01,.11,0,.69,.95,.02,0,.17,.28,0,.02,.08,.01,.8,.18,.31,.27,.01,.47,.08,.36,.01,0,.23,.69,.65,.16,.09,.71,.27,.1,.65,.96,.88,.01,.93,.82,.29,.47,.55,.92,.04,0,0,.01,.03,.32,.34,0,.97,.2,.87,.78,0,.23,.14,.02,0,.46,.36,.09,.16,.01,.1,.01,.03,0,.95,.23,.78,.01,.02,0,.75,.75,.04,.01,0,.52,0,.09,0,.75,0,.88,.7,0,.05,.05,.56,.01,.19,0,.01,.01,.31,.03,0,.53,.01,.99,.61,.49,.56,.46,0,.59,.48,0,.39,.99,0,.24,.2,.22,.01,.05,.88,.44,.03,.65,.09,0,.53,.27,.35,0,.01,.95,.03,.77,.09,0,0,.06,.04,.12,.83,.1,.78,0,.02,.91,0,.04,.61,.88,.29,0,.43,.81,0,.28,.04,0,.46,.04,.31,.12,.96,0,0,.01,.07,.02,.31,.1,.2,.21,.17,.07,.83,0,.5,.92,0,.19,.04,.71,0,.18,.01,.76,.97,.29,.14,.82,.56,.93,.89,.13,.54,.16,0,0,0,.29,.95,.9,.92,.3,.01,0,.57,.01,.08,0,.06,.01,.43,0,.59,.02,.11,.78,0,.04,.06,.83,.49,0,.31,.01,.03,.06,.9,.72,0,0,0,0,.44,.01,0,.1,0,0,.21,.01,.16,.9,.91,.92,.13,.01,.03,.02,0,.39,.67,0,0,0,.89,0,.14,.92,.13,0,.17,.41,.01,.39,.1,0,.01,.63,.05,.42,.36,.74,.38,.08,.13,0,.52,.03,.05,.18,.15,.04,0,.19,.47,.02,.62,.01,.06,.64,.01,.02,0,.82,.95,.41,.42,.03,.42,.27,.02,.95,.62,0,.68,.9,.25,.67,0,.21,.08,.23,0,.35,.34,.03,0,.05,0,0,0,.06,0,.77,0,.03,.17,0,.18,0,0,.83,.28,0,0,.03,.32,0,.97,0,0,.82,.35,.57,0,.4,0,0,.82,.03,.53,.14,.92,0,.95,.08,.72,.05,.21,.25,0,.09,.7,.33,.01,.87,.96,0,.04,0,.05,.01,.5,.57,.74,0,0,0,0,.59,0,.89,.67,.71,.82,.16,.02,.01,.86,.01,0,0,.02,.44,.51,.31,0,.92,.02,.65,.68,0,0,.34,.37,.6,0,.46,.56,0,0,.02,0,0,0,.13,.96,.01,.63,0,.6,.04,.21,.03,.17,.17,.53,0,.21,.96,0,0,.01,.85,.19,.57,0,0,0,.1,.59,0,.03,0,0,0,.17,.2,.09,0,.05,0,0,.02,.33,0,.12,.18,.97,.87,.58,.91,.58,.35,.56,.01,.93,.16,.27,.46,.04,0,0,0,0,.62,.01,.01,0,.97,.84,.67,.03,.02,.98,0,.94,.58,.27,.01,.02,.76,.21,0,.58,0,.04,0,.12,.74,.01,.03,.06,.14,.5,0,.37,.84,.06,.84,0,.13,.77,0,.81,.01,.65,.1,0,.71,0,.2,.4,.68,.12,0,.01,.04,.01,.69,.03,.02,0,.01,0,.71,0,0,.03,.15,.02,.05,.25,.54,0,.01,.77,.25,.96,.04,.75,.94,.68,.19,.04,.01,0,0,.4,.57,0,.96,.01,.1,.18,.03,0,.06,.33,0,.03,0,.01,.49,.58,.07,.74,.65,0,.26,.1,0,.95,.79,.72,.52,.31,.07,.01,.71,0,.98,.05,.28,.01,.11,.16,0,0,0,.76,.13,.9,.01,.52,0,.58,0,.65,.01,1,0,0,.37,.59,0,.01,0,.09,.03,.08,.06,.05,0,.59,.2,.81,.27,.21,.72,.08,.71,.62,0,0,.41,0,.82,.68,.49,0,.42,.13,.62,.23,.06,.02,0,.03,.02,.13,0,0,.01,.96,.09,.55,.21,.33,.3,.72,0,.41,.91,0,.04,0,.16,.05,0,.41,.55,.11,.86,.26,0,.13,.93,.13,0,0,.58,.01,0,0,.01,.86,0,0,.01,0,.09,.55,.73,.09,.1,.39,.83,.98,.01,0,.5,.16,.85,.01,.6,.94,.78,.87,.05,.08,.67,.02,.02,.55,.13,0,.05,0,.04,.15,.22,.05,0,0,0,0,0,0,.26,.49,.4,.01,.78,.03,0,.31,.04,.02,.51,0,0,.04,0,.03,.24,.05,.61,.78,.33,.62,.68,.69,0,.05,0,0,.2,.09,.02,.73,0,.98,.24,.98,0,0,0,.01,.11,.01,.01,.14,.14,.01,.81,.26,.07,0,.06,.12,0,.05,0,0,0,0,.47,.9,0,.01,.78,.03,.41,.42,.76,0,.34,.04,.3,0,.5,.09,.24,0,.09,.01,0,.38,.36,0,0,0,.03,.42,0,.1,0,0,0,0,.02,.25,0,.2,0,.09,0,0,.02,0,0,0,.39,.02,.04,0,.07,.64,0,.69,0,0,.84,0,.37,.03,.92,0,.04,.01,0,0,0,.01,.13,0,.96,.03,.52,0,.48,0,.03,0,0,0,.03,0,.41,.85,.08,.03,0,1,0,.14,.15,.12,.33,.11,.93,.02,.07,.03,.55,.02,.04,.08,.45,.21,.14,.27,.02,.44,.45,.57,.03,0,.64,.04,.02,.03,.97,.04,0,.71,.39,.68,0,.13,.56,.6,.18,.18,.52,.83,0,.55,.23,.46,0,.05,.77,0,.04,.65,.57,.57,0,0,.53,.01,.8,.07,.3,0,0,0,.44,0,.01,.6,.13,0,.07,0,0,.68,0,0,.17,0,.04,.14,.9,.79,.75,.24,.02,.64,.03,.05,0,.52,0,.05,0,.21,.29,.2,.43,.07,0,.35,.25,.24,.79,.63,.62,.01,0,.01,.26,.06,.31,.42,.01,.82,.12,0,.05,0,0,.01,.76,0,.42,0,.11,.79,0,.27,.07,.65,.01,0,.01,.53,.07,.22,0,.02,.66,.03,.01,.09,.01,.44,.54,.7,.78,.36,.8,0,0,.62,.35,0,.27,.5,.11,.01,.1,0,.73,0,.01,0,0,.29,.28,.74,.59,.13,0,0,0,.18,.19,.36,.04,.05,0,.45,.02,.13,.01,.77,.41,.09,.02,.06,0,.66,.06,.71,.17,.09,0,0,.02,.99,.63,.06,0,0,.01,0,.07,.83,.11,.71,0,.56,.01,.21,.41,.85,.14,.1,.09,.01,.06,0,.12,.13,.43,.02,.15,.01,.87,0,.38,0,.03,.01,.62,.75,.11,.71,.36,0,.06,0,.19,.08,0,0,0,.21,.08,.02,.88,.15,.44,.01,0,0,0,.01,0,.41,.04,0,.39,.25,.19,.05,0,.71,.91,.59,0,.99,.21,.57,.02,0,0,.02,.33,0,.02,.82,.41,.16,.01,0,.23,.02,.06,.26,.07,.13,.18,.08,0,.1,.9,.62,.4,.62,.47,.18,.04,.22,0,.48,.14,.57,.25,0,.36,.42,.15,.01,.08,.5,.52,.3,0,0,.26,.08,.02,0,0,.03,.95,0,.11,.54,.66,.82,.87,.04,.35,.41,.09,.45,.12,.36,.12,0,.13,.42,.17,.2,.03,0,.71,.22,.01,.73,.25,.27,.89,0,.09,.66,.39,.01,.15,.04,0,0,.04,.34,.83,.04,.29,.94,0,0,.1,0,0,.69,.05,.2,.13,.06,.01,0,.65,.81,.07,.31,.52,0,.01,.2,0,.43,0,0,.04,0,.05,.38,.03,.01,0,.34,.39,.05,.69,.49,.53,0,.38,0,.18,.05,0,0,.01,.15,0,.13,.3,.65,.23,.5,.01,0,.19,.52,0,0,.74,.14,.34,0,.32,.84,.9,.24,.3,0,.34,0,.07,.02,.88,.58,0,.01,.81,.28,.06,.92,.06,.02,0,.07,0,.06,0,.31,.43,.02,0,0,0,.57,.91,.05,.35,.63,.22,.19,.61,.01,0,.55,.06,.65,.03,.66,0,.5,.06,.27,.02,.42,.07,.35,.13,.37,.96,.16,.02,.97,.18,0,.04,0,0,0,.67,.63,.08,.73,.76,.81,.01,.88,.32,.95,0,.25,0,.15,.27,.61,.25,.87,.02,0,.6,.09,.52,.21,.09,.05,.31,0,0,.01,.26,.18,.6,.01,0,.18,.31,.86,.58,.43,.26,.22,0,.31,.88,.42,.56,.1,.39,.04,.6,.01,.17,.05,.08,0,.2,.01,0,.07,.14,.34,.1,.09,.04,.26,.11,.55,.01,.9,.24,.01,.31,.34,.69,.09,.13,0,.29,0,0,.02,.83,.05,.47,0,.55,.02,.38,.49,.76,.11,.92,.06,.16,.49,.04,0,.34,.06,.43,.01,.01,.36,0,.55,.01,.02,0,.06,.11,.38,.73,.06,.19,0,.17,.01,.03,.92,.11,0,.02,.01,.06,.05,.21,.09,.35,.14,.1,.67,.01,.55,.56,.1,.35,.3,0,0,.02,.73,.23,.45,.05,.73,.75,.49,0,.6,0];export{a as pvalData};
