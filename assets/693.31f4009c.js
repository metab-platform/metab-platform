const a=[.64,.27,.04,.7,.5,0,.23,.03,.05,.1,0,.14,.96,.65,0,.19,.5,.09,.29,.84,.55,.58,.18,0,.01,.76,.32,.04,0,.02,.53,.9,.07,.41,.23,.5,0,0,.21,0,.01,.63,.56,.23,.58,0,.22,.08,.23,.21,.21,.07,.08,.06,0,0,.01,.03,0,.04,.07,.55,.91,.97,.93,.48,.72,0,.32,.81,.65,0,0,.95,.29,.32,.16,.04,.05,.78,.93,.47,.99,.67,.07,.46,.79,.98,.33,0,0,.49,.13,.01,.59,0,.87,.04,0,0,.83,.91,0,.68,0,.29,.01,.01,.16,.07,.22,.06,.27,.25,.01,.28,.38,.85,.03,.07,.98,.28,.65,.06,.75,.12,.9,0,.26,0,0,.01,.24,.36,.06,0,0,.18,.36,.76,.19,.76,.04,.73,.55,.77,.48,0,.15,.91,.8,.21,.98,.34,0,0,.09,.8,.06,0,0,0,.1,.13,.16,.09,.53,.38,0,.04,.34,1,0,.07,.65,.18,.28,.05,.01,.11,.06,.84,.57,0,.06,.02,.11,.71,0,.1,.28,.01,.87,.21,.71,.17,.01,.05,.62,.56,0,.36,0,.84,.95,.01,.78,0,0,.1,.01,0,.82,0,.04,.49,.47,.03,.06,0,0,0,0,.09,.02,0,0,.77,0,.04,.2,.08,.05,.06,.32,.52,0,0,0,.21,.08,0,0,0,.25,.53,.94,.11,.82,.8,0,.35,0,0,.21,.06,.63,.04,.27,.01,.02,0,.55,.26,0,0,.17,.16,0,.02,.84,.52,.01,.02,.21,.35,.09,.09,.16,.28,0,0,0,.55,0,.08,0,0,0,.11,.4,0,.47,1,0,.27,0,.98,.77,.02,.52,.2,.92,.14,.65,.45,0,.11,0,0,.83,.6,.51,.5,0,.01,0,0,.12,.55,.32,.11,0,.88,.01,0,.83,0,.22,0,.8,.04,.4,.4,.68,.28,.32,0,.16,.55,.24,.33,.2,.48,0,.1,.94,0,.8,0,.2,0,.85,0,.02,0,.09,.36,.72,.02,0,.32,0,.05,.4,.91,.01,0,0,.44,.57,.41,0,0,.12,0,.06,.26,.02,0,.41,.43,.23,.32,.28,.5,.29,.58,.46,.4,.24,.59,.04,.01,0,.18,.78,.43,0,.8,.03,0,.18,.11,0,.84,0,.84,.08,0,.06,.65,0,.27,0,.47,.09,.86,0,.19,.5,0,.39,.39,.91,.01,.01,.26,0,0,.01,0,.1,.68,0,0,.1,.74,.32,.3,0,.97,.4,.01,.2,0,.02,.67,.05,.25,.4,.04,.25,0,.44,0,.85,0,0,.16,.41,.9,.67,.01,.61,0,.71,.84,.81,.03,0,0,.15,.06,0,.14,.01,.04,.13,.01,.17,0,.1,.3,.12,0,0,0,.7,.09,.45,.15,.39,0,.63,.05,0,.1,.38,0,0,0,.86,.06,.74,.02,0,.54,.12,.01,.29,0,.69,.01,.09,.78,.07,.01,0,.44,.96,.66,0,.13,0,.73,.69,.79,.04,.62,0,0,.94,.03,.35,.44,0,.2,0,.48,.71,0,.62,.2,.97,.31,.11,.17,.13,0,0,0,.02,0,.34,.42,.37,0,.03,.3,.09,.72,0,.06,.15,.48,.55,.31,.01,.63,.43,.11,0,.21,.27,.02,.42,.4,.12,.34,.69,.75,.03,0,.04,0,.03,.16,.52,0,.37,.72,.68,1,.06,.13,.05,.04,0,.32,.46,.07,.79,.24,.59,.29,0,0,.24,0,.85,0,0,.01,.2,.33,.24,.46,.03,.8,0,.04,0,.84,0,.57,.47,0,.01,.87,.62,0,.2,.01,.07,.42,.16,.01,.16,.87,0,.22,.4,.11,.72,.05,0,.98,.21,.02,.8,.67,0,.27,.15,.59,0,.03,.16,.94,.24,.2,.15,0,.31,.27,.8,0,.6,.39,.09,.56,.26,.03,0,0,.55,.16,.35,.57,.51,0,.02,.08,0,.36,.73,.77,.5,.01,.82,.11,0,.89,.27,.24,.13,.35,.43,.37,.4,.3,.34,.08,.06,.21,.25,.36,.64,.33,.48,.02,.75,.99,.53,.63,.75,.01,.06,.24,.28,.02,0,.26,.16,.86,.42,.21,.74,.32,.69,.22,.43,.18,.1,0,0,.2,.05,.76,0,.83,.28,.19,.59,1,.09,0,0,.04,.63,.01,.09,.04,.02,.13,0,.74,.62,.81,.21,.57,.28,.03,.37,0,.63,.07,.01,.01,0,0,.84,.6,0,.4,.05,.92,.61,0,.02,.32,.34,.2,.08,0,.01,.18,0,.19,.13,0,.01,0,.48,.26,.14,.41,.04,0,.4,.97,.47,.59,0,.06,.56,.11,0,.78,.12,.07,.39,.02,.02,0,.81,.23,.28,.22,.33,.24,.02,.11,.15,0,.17,.01,.53,.51,0,0,0,.07,.03,.42,.11,.08,.75,.3,.02,.04,.77,0,.01,.98,0,.87,.4,.01,.08,.82,.27,.46,.63,0,0,0,.1,.13,.26,.01,0,.76,0,0,.91,.06,.01,.01,0,.49,.33,0,0,0,0,.02,.51,.39,.12,0,.47,.75,0,.99,0,.02,.17,.28,.68,.01,.42,0,.12,.41,.9,.95,.54,.03,.48,.38,.39,.31,.54,.02,.17,0,.67,0,.52,.24,.32,.08,.56,0,.09,0,0,.21,0,.85,.84,.42,.19,.47,.53,0,.24,0,.01,.01,.06,.62,.83,.27,.03,.36,.41,.63,.36,0,0,.76,0,.03,.91,.09,.1,0,.03,.66,0,0,0,.16,.86,0,.79,.04,.17,.98,.26,.61,.02,.96,.43,.38,.21,.62,.14,0,0,.74,.17,0,0,0,.06,.6,.38,0,.96,.17,.51,.03,0,.89,.94,0,.23,.01,0,.13,.13,0,.13,.95,.6,.53,.35,.22,.23,.96,.46,0,.62,.37,.75,.25,.01,.15,0,.01,0,.18,.7,.05,0,.73,.48,.04,.01,0,.21,0,.1,.98,.53,.69,0,.39,.27,0,.32,.36,0,.07,.45,.6,.02,.02,.02,.7,.55,0,.53,.82,.48,.57,0,.05,.27,.21,.67,.86,.89,.04,0,.13,0,.78,0,.04,.03,0,.48,.11,.02,.76,.01,.22,0,0,0,.22,0,0,.01,.04,.71,.17,.46,.33,.04,.36,.3,.8,.63,.67,.98,0,.94,.1,.01,.01,.02,0,.99,.75,.01,1,0,.03,.15,.11,.02,.13,.94,0,.93,0,.04,.87,.82,.46,.31,.01,0,.21,.4,0,.23,.21,.56,.93,.51,0,0,.77,0,.82,.04,.34,.58,.76,.53,0,.14,0,.47,.76,.29,.29,.07,.45,.06,.01,.09,0,.77,0,.03,.36,.39,0,.6,0,.19,.88,.09,.52,.03,.02,.15,.54,.94,0,.69,.95,0,.56,0,0,.09,.22,0,.19,.1,.42,0,.53,.68,0,.59,.75,.03,0,.18,0,0,.25,0,.01,.65,.95,.21,.88,.06,.02,.87,.15,.42,.38,0,.01,0,.19,.59,0,.29,.4,.18,.06,.01,0,.05,.5,.72,0,0,.63,.41,.43,.58,0,.52,0,0,0,.13,0,.18,.12,.44,.06,.79,.88,.38,.47,0,.92,.01,.2,.52,.77,.25,.81,.57,.31,.79,.7,.01,0,.57,.09,0,.99,.01,.26,.91,.3,.06,0,.29,0,.27,.45,.03,.93,.03,.52,.28,0,.51,.1,.45,.12,.09,.27,0,0,0,0,.43,.94,.19,.46,.17,.82,0,.66,.87,.01,0,0,0,.25,.63,.08,.14,.32,0,.94,.85,0,.16,0,0,.09,0,.04,.07,.07,0,.04,.15,.17,0,.52,.19,0,.7,.25,0,0,.01,.86,.56,.01,.79,.5,0,.22,0,.82,0,.49,.28,.74,.86,.91,.33,.02,.37,.83,0,0,.3,.05,.06,0,.04,.81,.05,.01,.03,0,0,0,.33,.13,.65,0,.02,.01,.43,0,.55,.57,.16,.23,.53,.01,0,.42,0,0,.14,.06,.83,.01,0,.85,.15,.06,.04,.93,0,.27,0,.17,0,0,0,.18,0,.01,.09,.61,0,.77,0,.01,.14,0,.31,.04,.13,.17,.68,.17,.15,0,.25,0,.1,.8,.18,.71,.68,.57,.84,.31,0,.76,.01,.17,.06,.01,.38,.03,.94,0,.14,.73,.31,.41,.02,.06,0,0,.03,.75,.8,0,.75,0,.97,.7,.87,.93,.86,.06,.09,.43,.66,.01,.39,.25,.95,0,.67,.51,0,.19,.66,.78,.05,.64,0,.93,.03,.77,.38,.37,.03,.21,0,.93,0,.57,.27,.08,0,.47,0,.87,.23,0,0,.96,0,.06,0,0,.87,.82,.82,.68,.23,.67,.06,0,.03,.26,0,0,0,.01,.08,.06,.07,.02,.09,.45,.3,.65,.6,0,0,0,.02,.2,0,.07,.93,.91,1,.52,0,.72,.01,.04,.37,.09,0,.73,0,.33,.47,0,.14,.1,.64,.25,0,.18,.98,.1,.07,.03,.06,.33,.73,0,.11,0,.44,.82,.63,.68,.42,.32,0,.02,.73,.22,0,.08,.34,.08,.89,.27,.44,.01,0,.59,.03,0,.03,.45,.75,.35,.74,.15,.25,.01,.14,0,.4,.19,.07,.04,.02,0,.27,.25,.23,0,.39,.01,0,.01,.03,.01,.37,0,.01,.25,.11,.03,.32,0,.73,.64,0,.01,0,.22,.29,.9,.3,0,0,0,.82,.09,.42,.02,.06,.48,.16,.04,.01,.91,.19,.82,.26,.08,.3,.84,0,0,.01,.21,.12,.6,.92,.14,.82,.82,0,.04,0,.9,.3,0,0,0,.26,.11,.43,.61,.36,1,.01,.05,.14,.08,0,0,.01,.05,.04,.39,.3,.19,.04,.47,.73,.54,.95,.98,0,.79,.36,0,.02,.03,.16,.81,0,.14,.62,.73,.16,0,0,.32,0,0,.35,.52,.34,.44,.58,0,.21,.58,.62,.46,.47,.37,.36,.06,.21,.08,.62,0,.38,.58,.66,.18,.02,.01,.45,.22,.47,.36,.64,0,0,.14,.73,.65,0,.14,.52,.76,.56,.04,.57,.39,.32,.82,.03,.18,.3,.19,.99,.43,.11,.96,.01,.53,.14,.65,.07,.9,.24,.7,.48,.01,.43,.88,.95,.39,.03,.8,.47,.09,.01,.69,.02,.04,.04,.12,.24,.85,.07,.44,.78,0,.13,.02,.09,.01,.11,.25,.51,.23,.5,.41,.01,.08,.15,.52,.9,.4,0,.14,0,0,.07,.14,0,.46,.86,.02,.6,.02,0,0,.07,.08,.02,.19,1,.17,0,.58,0,.99,0,.09,0,0,.08,0,.15,.82,.15,.22,.23,.51,.55,0,.01,.86,.08,.79,.69,.46,.27,.01,.11,.33,.81,.06,0,.64,0,.84,0,.02,.73,.02,0,.3,.46,.35,.42,0,.14,0,.27,.64,.03,0,.9,.72,0,.06,0,0,.37,.02,.01,.45,.58,0,.66,.25,.26,.18,.26,.14,.55,.76,.49,0,.01,.82,.11,.77,.86,.3,.64,.83,.98,.95,0,.03,.92,.09,.15,0,.01,.1,.02,.32,.76,.01,.03,.88,.43,.02,.68,.07,.69,0,.76,.18,0,.85,.23,.93,.31,0,0,.26,.06,.49,.01,.73,.75,.85,0,0,0,.36,.38,.4,0,0,.15,.14,.68,.46,.59,.16,.67,0,.18,.35,.82,.6,.01,.98,.1,.03,.07,.29,.02,0,.13,.38,0,.41,.29,0,.97,.23,.2,.09,.07,.19,.31,.08,.1,.3,.45,.12,.7,.03,0,.04,0,.47,0,0,.85,.6,0,.28,0,.24,.32,.64,.44,.14,.14,.49,.52,.14,.12,.11,.06,.74,.16,.71,.99,0,.47,0,.61,0,0,0,.08,0,.38,.41,.11,.19,0,.02,0,.01,.19,.09,.2,.03,.05,.65,.01,.09,.08,.88,.14,.61,.85,0,.37,.08,.76,.98,.34,0,.18,.17,.59,.87,.3,.23,.49,.09,.26,.1,.57,.04];export{a as pvalData};
