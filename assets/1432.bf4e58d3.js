const a=[.49,.9,.78,.57,.41,.15,.52,0,.74,.01,.86,.34,.21,.01,.44,.85,.34,.8,.17,.97,.46,.05,.2,.01,.97,.25,0,.03,.27,0,.4,.01,.1,.75,.17,.51,.87,.14,.92,.98,.34,.52,.01,.79,.24,.24,.08,.64,.08,0,.75,.12,.98,.93,0,.28,.88,.03,.12,.86,0,.16,.18,0,.25,.02,.11,.09,.8,1,.02,.74,0,.04,.73,.69,.36,0,.3,.24,.19,.79,.5,.46,.06,.01,.5,.29,.55,.17,0,.87,0,.29,.82,.61,.18,.52,.84,0,.39,.3,.38,.51,.05,.48,.02,0,.18,.13,.94,0,.84,.73,.45,.93,.24,.14,.24,.44,.62,.08,.01,.29,0,.02,.47,.97,.29,.79,0,.05,.56,0,.47,.7,0,.8,.05,.77,.03,.82,.01,.39,.14,.02,.5,.08,.09,.75,.32,.01,.21,.26,0,0,.57,.61,.85,.2,0,.01,.45,.1,0,0,.95,.07,.03,.92,.16,.64,0,.01,.01,.07,.48,0,0,.75,.08,.16,.12,.55,.01,.15,.45,.24,0,.85,.01,0,.75,.01,.01,.23,.06,.09,.87,.11,.3,.07,.49,.5,.6,0,.02,0,0,.87,0,.09,.71,.64,.06,.09,.24,0,.07,.03,.08,.23,.84,.95,.04,.57,0,.11,.01,0,.11,.57,.38,.97,.54,.1,.06,.13,.58,.62,0,.03,0,0,0,.01,.56,.01,.82,.48,0,.83,0,.05,.02,.61,.25,.86,.26,.79,.23,.03,.14,.03,.08,.24,.09,.12,.87,.61,.66,.65,.61,.6,.57,.91,.01,0,.65,.05,0,0,.46,.34,.01,.35,0,.82,.01,.24,0,0,.03,0,.01,.01,.75,.6,.51,.13,.1,.45,.04,.34,.53,.36,.98,.03,.01,.2,.15,.93,.15,.26,.13,.17,.07,.01,.67,.13,.32,.96,.43,.35,0,.01,.08,1,.1,.01,.39,.03,.98,.84,.06,.39,.05,.02,.01,.31,0,.05,.14,.5,.81,.99,.15,0,0,.01,.02,0,.24,.01,.24,.6,.18,.19,.59,.83,.65,.74,.01,0,.19,.56,.02,.86,0,.96,.15,.58,.85,.24,0,0,.05,.14,.63,0,.99,.62,.37,.69,.1,.19,.19,.74,.43,.32,.27,.29,.44,.02,.09,.6,.04,.94,.97,0,.04,.19,.47,.64,0,.14,.24,.16,.27,.47,.78,.48,.75,.39,0,.32,.02,.3,0,.37,.12,.82,.75,.71,.78,.8,.6,.16,.05,0,0,.39,.52,.28,0,.4,.15,.04,.22,0,.01,.25,.04,.75,.02,0,.63,.09,.75,.01,.13,0,.25,.33,.06,.08,0,.7,0,.11,.62,.02,.09,0,.01,.54,1,.16,.98,.84,0,.83,.36,.77,0,.12,.05,.07,.52,0,.01,.29,.06,0,.11,.09,0,0,.66,.87,.55,.25,.77,.02,.08,.45,.01,.71,.66,0,0,.9,.31,.51,.29,.17,.03,.32,.31,0,.03,.16,.1,.43,.07,.02,0,0,0,.21,.09,.18,.22,.9,.83,.27,.25,.56,.65,.02,0,0,.54,.01,.19,.05,.08,.09,0,.69,.54,0,.5,0,.65,.89,.02,0,.67,.17,0,.67,.39,.81,.02,.79,.09,0,.14,.84,.77,.43,.12,0,.91,.61,.5,.71,0,.63,.31,.71,.8,.01,.25,.77,.02,.72,0,.82,.84,.13,.01,.14,0,.11,.46,.51,1,.97,.53,.27,.71,.48,0,.48,.1,.8,0,0,.27,.74,.28,0,.03,0,0,.57,.64,.44,.76,.87,.98,0,.59,.19,.45,.01,.17,.55,0,.03,.04,.15,.07,.61,.04,0,.04,.06,.11,.26,.49,0,.09,.1,.16,0,0,.01,.19,.55,.09,.05,.55,.07,0,.3,.95,0,.25,.36,0,.27,.12,.3,.04,.92,.1,.67,.39,.02,.35,0,.21,.66,.31,.21,.19,.53,.88,.5,.47,0,.05,0,.1,.99,.63,.28,.66,.06,.98,.2,0,.06,.91,.58,.13,.01,.3,.07,.03,.15,.79,.31,.12,.02,.34,.78,.33,0,0,.62,.08,.44,.78,.34,.68,0,.14,0,0,0,.74,.84,.46,.16,.66,.22,0,.08,.95,.85,.51,.62,.49,0,.85,.26,.38,.12,.36,.4,.01,0,1,.96,.21,.72,.11,.46,.07,0,.97,.32,.39,.7,.06,0,.94,.22,.01,0,.85,.07,.67,.22,.13,.27,.35,.03,.17,.07,.25,.96,.01,.7,.26,.07,.02,.01,.1,.12,0,.21,.01,0,.32,0,.74,.61,.58,.05,.98,.01,.02,0,1,.01,.07,.03,.03,.02,.31,.03,.69,.04,.36,.03,.64,.97,.14,.17,.67,.33,.01,.62,0,.48,.48,.32,.26,.07,.78,0,.57,.01,.12,.34,.7,.46,0,.76,.11,.89,.15,.06,.89,.68,.14,.54,.08,.16,.33,.09,.18,.02,.09,0,.01,.93,.58,0,.01,.39,0,.21,0,.73,.13,.04,.14,.95,.62,.04,0,.01,0,.19,.01,.5,.34,.61,.02,0,.32,.31,0,0,.11,.11,.01,0,.02,0,.34,.01,.53,.19,.01,.17,.87,.46,.69,.08,0,.85,.01,0,.55,.39,.89,0,.09,.6,.71,.59,.61,.26,.3,.32,.23,.13,.27,.14,.46,0,.96,0,.94,0,.03,.09,.45,.01,.8,0,0,.12,0,.51,.49,.88,.03,.38,.03,.85,.08,0,0,.6,.55,.33,.47,.17,0,.31,.17,.21,.8,.87,.13,.55,.09,.03,0,.3,.78,.95,0,.43,.51,.89,0,.7,.14,.05,.13,.88,.29,.38,0,.91,.03,.1,.84,0,.55,.84,.05,.08,.01,.24,.19,.29,.06,0,0,.14,.19,0,.06,0,0,0,.01,.21,.2,0,.04,0,0,.01,.31,0,.99,.53,.34,.82,.12,.81,.85,.94,.73,.02,.87,.46,.92,.87,.26,0,0,.01,.14,.64,.01,.77,.02,.35,.24,.06,.42,0,.79,.09,.11,.04,.78,.94,0,.7,.2,.04,.69,0,.87,.01,.58,.47,.02,.71,0,.62,.9,0,.43,.39,.84,.61,.04,.01,.33,0,.65,.26,.26,.32,.05,.24,0,.66,.11,.76,0,.08,.06,.39,.5,.45,0,.01,0,.96,.1,0,.71,0,0,.96,.65,.14,.79,.11,0,.04,.64,.87,.05,.32,.45,.57,.18,.32,.48,.03,0,.66,.1,.09,0,.13,0,.9,.38,.31,.08,.56,.06,.06,.3,0,0,.97,.12,.02,.63,.81,.01,.29,.27,.02,.67,.67,.05,.23,.58,0,.01,.08,.01,.09,.76,.82,.72,.35,.17,0,.15,.21,.3,.46,.41,.82,.03,.19,.6,.09,.55,.65,.98,.87,.01,.04,.6,.01,.28,.02,.26,.17,.33,.03,.15,0,.44,.41,.17,.79,.32,.01,.02,.81,.05,.01,0,.29,.69,.72,.91,.87,0,.08,.94,.01,.23,.57,.61,.89,.58,.72,.29,.02,.13,.69,.26,.63,.36,.18,.03,.05,.77,.06,.48,.27,.03,.01,.2,.9,.97,0,.46,.02,.01,.01,.7,.05,.79,.31,.75,.01,.02,.1,.76,.2,.36,0,.87,0,.02,.01,.01,.1,.19,.45,.37,.03,.36,.91,.36,.18,.87,.09,.59,.24,.2,.71,.58,.76,.01,.06,.13,.65,.02,.01,.31,.54,.01,.58,0,.1,.34,.26,.61,.02,.06,.01,0,.04,0,.7,.84,.08,.08,0,.57,0,.31,.99,0,.95,0,.04,.73,0,.79,.17,.29,.07,.15,.46,.15,.47,.17,0,0,.02,.79,.2,.21,.01,.28,.01,.6,.71,.15,.31,0,0,.65,.54,.03,.54,.4,.01,.51,.05,0,.67,.87,.69,.14,.25,.75,.01,0,.12,.9,.59,.52,0,.32,.46,0,.27,.4,.96,0,.04,.26,.03,.01,.57,.26,.26,.15,.77,.55,0,.89,.91,0,0,.05,.17,.26,.04,.03,0,0,0,.03,.13,.59,.02,.15,.01,.01,0,.36,.06,.52,.02,.01,.19,.01,.13,.01,.02,0,.01,.95,0,0,.39,0,.11,.92,.75,0,.02,0,.09,0,0,.82,.17,0,.5,.2,.12,0,.32,.11,.8,.25,.19,.2,0,.08,.03,.13,.35,.05,0,.01,.65,.43,.13,.01,.34,.91,.21,.85,.05,.51,.96,.22,.69,.25,.98,.27,0,.36,0,.58,.31,.43,.44,0,.04,0,.19,.01,.14,.89,0,.34,.54,.89,.29,.83,.07,.96,.45,.65,.13,.26,0,.47,.85,1,.07,.08,.54,.01,.03,.9,.99,.43,.37,0,.73,.06,.1,.05,.6,0,.08,0,.91,0,.78,.61,.04,.01,.18,0,.14,.96,.03,0,.08,0,.02,.37,.01,.2,.7,.31,.39,.1,0,.54,0,.05,0,.69,0,.04,.47,.94,.94,.88,0,.16,.36,.44,.68,.19,.18,.02,0,.01,.14,.03,.04,.12,.43,.71,.02,.02,.22,.01,.46,.04,.49,0,.16,0,.4,.21,0,.22,.02,.12,.58,.11,.25,.14,.13,.11,.66,.06,.37,.99,0,.15,.18,.12,.04,.15,.58,.21,.14,.01,0,.2,.03,.04,.99,.33,.38,.46,.07,.16,.06,0,.12,0,.1,.02,.98,.16,.15,.07,0,0,.76,.5,.21,.29,.06,.21,0,.94,0,.43,0,.74,.92,.63,.32,.06,.2,.83,.71,.35,.24,.67,0,0,.63,.57,.66,.03,.07,0,.04,0,.1,.05,.35,.3,0,.41,.01,.86,.52,.78,.32,.69,.18,.3,.08,0,.62,0,.31,.16,.07,.18,.32,.01,.78,.01,0,.54,.39,.18,.07,.16,.17,.06,.9,0,.35,.03,0,.02,.02,.54,.19,.26,.1,.3,.03,.97,0,.01,.1,.31,0,.53,.03,.05,.23,.14,.49,1,.03,.33,.27,.53,0,.1,.02,.21,.12,.02,0,.84,.07,.11,.53,.34,.08,.5,.03,0,.06,.03,.11,.06,.39,.39,.5,.49,.01,.38,.36,0,.32,.03,.13,.01,.36,.56,.67,.42,.61,.16,.02,.2,.12,.05,.07,.01,.79,.01,.87,.44,.06,0,.54,0,.06,.02,.07,0,.07,.12,0,.74,.18,.12,.22,.99,.15,.38,.51,.31,.06,.83,.28,.01,.97,.35,.96,.25,.23,0,.06,.01,.3,.93,.49,.43,.43,.08,.1,.65,.72,.6,.02,.61,.06,0,.11,.82,.06,.74,.25,.72,.51,.25,.96,.04,0,.04,.49,.12,.49,.55,.01,.01,.11,.17,.03,.77,.15,0,.02,0,.35,.74,.72,0,.04,.08,.51,.25,.96,.85,.92,.04,.45,.06,.45,.34,.25,0,.33,0,.32,.95,.01,.08,.01,.28,0,.95,.13,.9,.69,.48,.21,.1,.67,.02,.01,0,.05,.39,.3,.03,0,0,.74,.42,.62,.46,.47,0,.53,0,0,.18,0,.07,.2,.02,.17,.14,0,.14,0,.91,.02,.86,.76,.26,.39,.55,0,0,0,.96,.92,.91,.59,.51,.31,.96,.64,.14,.13,.03,.13,.65,.15,.18,0,.11,.05,.89,.11,.15,.31,.07,.36,.14,.29,0,.07,.08,.68,.04,0,.19,0,.07,.35,.02,.02,.2,.14,.74,.43,.55,.11,.58,0,.97,.02,.39,.67,.29,.27,.3,.44,0,.11,.12,.13,.51,0,.99,.37,0,.19,.85,.25,.84,.8,.59,.63,.28,.15,.1,.99,.32,.03,.41,0,.22,.9,.45,.76,.87,.1,.01,.97,.5,.96,.8,.01,0,.56,.09,.01,.74,.01,.76,.9,.31,.84,.55,0,.74,0,.47,.21,.21,.86,.11,.38,.92,0,.13,.4,0,.7,.88,.35,.01,.22,.07,.12,.17,.4,.38,.01,.35,.69,.28,0,.1,.83,0,.17,.66,.32,.32,.54,.49,.5,.77,.7,.02,.03,.06,.8,.57,.42,.54,.77,.03,.01,.33,.01,.04,.53,.11,.46,.06,.43,.03,.21,.8,.33,.72,.36,.01,0,.35,.2,.15,.03,.01,.22,.01,.32,.09,.68,.77,.59,.04,.01,.2,.09,.3,.01];export{a as pvalData};
