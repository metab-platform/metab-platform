const a=[0,.74,.99,.21,.34,0,.68,0,.93,.49,.57,0,0,.49,.86,.23,.04,.18,0,0,.68,.98,.96,.98,.94,.56,.55,.73,.87,.23,.39,.76,.96,0,.05,.03,.42,.71,.07,.81,.46,.62,.19,.02,0,.78,.22,0,.53,.62,.98,0,.2,.92,.03,.89,.73,0,.26,.44,.01,.92,.98,.51,.46,.51,.84,.35,.75,.72,.68,.83,.21,.09,.79,.01,.23,.01,.99,.2,.18,.48,.8,.71,.99,.02,.53,.08,.89,.21,.1,.09,.38,.16,.03,0,.51,0,.82,.01,.63,.53,.21,.87,.85,0,.76,.04,.56,.95,.01,.8,.45,.03,.41,.45,.54,.95,.2,.94,.04,.21,0,.68,.16,.66,.51,.01,.81,.46,.1,.33,.95,.71,0,0,.12,.02,.83,0,.94,0,.68,.88,0,.02,.13,.02,.57,.4,.57,.08,.2,0,.04,.07,.04,0,.07,.77,.29,.59,.01,.42,.22,.08,.75,.8,.02,.68,0,.96,.2,.94,.36,.96,.38,.11,0,.94,.96,.04,.83,.1,.6,0,0,0,.11,.01,.45,0,0,.07,.41,.69,.96,0,0,.72,.97,.95,.53,0,.73,.35,.35,.26,.09,0,.07,.88,.01,.61,0,.29,.4,.23,.98,.25,.75,.92,.95,.79,.13,.5,.02,.82,0,.72,.66,.72,.3,.63,0,0,.35,.64,.65,.98,.26,.41,.46,.11,.11,.2,.95,.29,.2,.2,.08,0,.3,.55,.96,.02,0,.11,.65,.44,.89,.68,.18,.78,.08,.84,.93,.79,.91,0,.02,0,1,.74,.47,.08,.26,0,.74,.58,.21,.05,.74,.04,.97,.69,.02,.6,.01,.75,.38,.06,.53,.32,.39,.26,.89,0,.09,.98,.14,.35,.93,.28,.01,.09,.65,.27,.27,.69,.66,.04,0,0,.28,.97,.43,.9,.9,.16,.45,.13,.66,.61,.68,1,.73,.6,.42,.97,.82,.61,.86,0,.3,.18,.83,.41,.62,.91,.1,.73,.21,.55,.64,.65,.11,.07,.82,.95,.6,0,0,.91,.97,.91,.55,.75,.96,.64,.07,.15,.53,0,.52,.07,0,.48,.06,.27,.78,.54,.98,0,0,.01,.02,.52,.81,0,.19,.91,.88,.79,.77,.41,.78,.32,.7,.68,.78,0,.22,.45,.11,.35,.94,.4,.98,.53,.34,.7,.82,.33,.51,.01,.55,.91,.94,.87,.26,.31,.69,.98,.01,0,.61,.88,.15,0,0,.01,.07,0,.68,.67,.37,0,.91,.72,.45,.01,.42,0,.07,.48,.84,.76,.57,0,.69,.74,.72,0,.57,.18,.47,.14,0,.02,1,.61,.26,.58,.61,.43,.06,.88,0,.31,.89,.71,0,0,.59,.25,.18,.04,.02,.85,.07,.9,0,0,.42,.82,.43,.16,.51,.09,.41,.64,.59,.21,.99,.84,.31,.74,.77,.77,.54,0,.48,.45,.25,.61,.96,.04,.82,.15,.61,.28,1,.76,.99,.51,.01,.36,.34,.07,.78,.48,.46,.38,.99,.97,0,.19,0,.87,.92,.78,.24,.29,.32,0,.43,0,.71,.22,.21,.97,.53,.15,0,0,.43,.26,.14,.03,.73,.38,0,.08,.52,.71,0,.09,.96,.6,0,.57,.76,.5,.75,0,.45,.75,.21,.79,.74,.78,.34,.05,.8,.15,.33,.04,0,0,.7,.9,.25,.63,.59,.54,.01,.26,.44,.77,.19,0,.85,.24,.42,.37,.46,.54,.32,.74,.14,.99,.7,.92,.58,0,.46,.25,0,.76,.93,.99,.68,0,.66,.09,.46,.3,.01,.79,.24,.21,0,0,0,.12,.27,.07,.2,0,.5,.58,.36,.44,.52,0,.53,.82,.74,.38,0,.47,.09,.06,.85,.16,.64,.23,.02,.02,.01,1,.51,.09,.38,.99,.33,.79,0,.6,0,0,.95,.77,.84,.11,.77,.85,.01,.52,.57,.9,.9,.02,.57,0,.22,.76,.54,.74,.93,.1,.8,.18,.03,.71,.9,.41,.37,.02,.29,.31,.66,.24,0,0,.01,.47,.81,0,.01,.59,.55,0,0,.81,0,0,.64,.01,.48,.28,.06,.01,.38,0,.04,.07,0,.34,.94,.78,.01,.18,.16,.68,.86,.51,.16,.65,.04,.92,.26,.01,.88,0,.13,.52,0,.79,0,.12,.69,.08,.41,.47,.78,.62,.83,.01,.98,.57,.67,.06,.17,0,.74,.75,.53,.06,0,.33,.51,0,.72,.26,.3,.83,.01,.52,1,.24,.96,.48,.08,.81,.84,0,.11,0,.42,.1,1,0,.41,0,.95,.02,.49,.69,.54,.18,0,.95,.99,.6,.94,.01,.59,.06,.49,.77,.58,.52,.42,.69,.48,.98,.84,.93,.12,0,.01,.67,.02,.38,.25,.26,.08,.17,.48,.75,.6,.56,.41,.82,.08,.1,.49,.63,0,0,.35,0,0,.52,.15,0,.62,.03,.36,.4,0,.64,.17,.9,.4,.05,0,.24,.1,.88,0,.83,.26,.91,.11,.53,.48,.02,.63,.7,.05,.07,.44,.03,.01,.32,.02,.25,.09,.82,.12,.49,.18,.99,.89,0,.59,.36,.33,.01,.05,.38,.09,.29,.59,.5,.44,0,.21,.12,.1,.57,.03,.47,.02,.45,.72,.56,.25,0,.01,.06,.72,0,.02,0,.75,.25,.45,.59,.82,.23,0,.97,0,.65,0,.22,0,.1,.4,.63,.89,.68,0,.26,.54,.16,.01,.01,.55,.64,.92,.64,0,.65,.7,.64,0,.75,.05,.56,.22,.96,.06,.47,0,.67,0,.94,.78,.07,.52,.68,.14,.35,.62,.27,.61,.38,.11,.39,.22,.5,.69,.88,.52,.48,.82,.57,.44,.45,.96,.77,.81,.07,.17,.64,0,0,.64,.69,.63,.95,.9,.9,.22,.52,.73,.12,.11,.14,.25,.25,.59,0,0,0,.15,.48,.25,.62,.29,.17,.59,.02,.61,.2,.35,.16,.89,.02,.01,.64,0,.05,.02,0,.9,0,.25,.03,0,.33,.28,0,.19,.09,.61,.01,.29,.79,.57,.02,.53,.33,0,.01,.42,.04,.19,.66,.17,.03,.29,.58,.76,.84,.75,.54,0,.2,0,.45,0,.78,.31,.72,.05,.23,.8,.73,0,.01,.16,.06,.1,.61,.02,0,.32,.36,.28,.03,.79,.78,.41,.34,.11,0,0,.72,.69,.63,.69,.26,0,.71,0,.56,.34,.86,0,.12,.87,0,.37,.93,.12,.56,.6,.48,.92,.93,.42,.1,.8,.74,0,.29,0,.32,.5,.01,.15,.08,.65,.05,0,.12,.46,.03,.96,0,.35,.63,.06,.33,.51,.39,0,0,.25,0,.35,.42,.09,.26,.93,.71,.51,.02,0,.47,.99,.58,0,.1,.6,0,.03,.95,.74,0,.36,.2,.51,.47,0,0,0,.77,.05,.98,0,.19,0,0,.55,.73,0,.4,.16,.9,.7,.81,.82,.28,.54,0,.18,.56,.36,.05,.25,.07,.39,.57,.64,.17,.01,.57,.5,0,.34,.31,.21,.93,.68,.23,.25,.09,.73,0,.79,.72,.89,.92,.27,0,0,.85,.71,.69,.11,.45,.63,.04,.82,0,0,.37,.85,.72,0,.45,.64,.08,.01,.97,.24,0,0,0,.01,.03,.03,.06,.11,.97,.86,.72,.55,.25,.06,.05,0,0,.58,.62,.84,.15,0,.09,0,.4,.77,0,.92,.27,0,.01,0,0,.53,.01,.04,.64,0,.67,0,.22,0,0,.14,.36,.03,0,.51,.91,.31,.99,.39,.28,.62,0,.05,.25,.59,0,.36,.05,.2,0,.45,.99,.03,0,.28,.26,.75,0,.42,.8,.55,.7,.74,.61,.61,.07,0,.09,.33,.15,0,.47,.59,.31,.84,.48,.48,.86,.01,.46,.09,.92,.51,0,.59,.71,0,.68,.51,0,.81,.52,.58,.1,.05,.7,.84,.87,.53,.41,.02,.05,.39,.12,.56,0,.08,.27,.26,.25,.02,.16,0,.94,0,.42,.17,.86,0,.19,.77,.25,.26,.31,.05,.44,0,.58,.83,.46,.18,.81,.04,.32,.99,.1,.94,.89,0,.94,.25,.6,.05,.8,.47,.5,.55,.52,.52,.59,0,.3,.05,.68,0,.3,.01,.34,.91,.3,.08,0,.45,.21,.76,.27,.86,.86,.89,.26,0,.79,.01,.01,.95,.72,0,.79,.24,.6,.87,.51,.05,.28,1,0,.02,.08,.42,.5,.46,.75,.19,.35,0,.1,.75,.66,.51,.99,.02,0,.02,0,.55,.82,.66,.52,0,.24,.16,.37,.46,.2,0,.94,.92,.87,.58,.74,.79,.04,.69,.1,.55,.4,0,0,.02,.66,.51,.26,.92,.13,.08,.03,.62,.95,.52,.04,.55,.38,.3,.01,.93,.51,.02,.27,.55,.41,.67,.22,.4,.01,.33,.39,.22,.56,.58,.4,.21,.01,.8,.19,.53,.15,.25,.12,.1,.52,.96,.95,.02,.01,.79,.22,.88,.67,0,0,.39,.73,.52,.27,.65,.33,.87,0,.18,.48,.3,0,.05,.92,.11,.54,.78,.32,.28,.57,.21,.77,.13,.57,.64,.19,.7,.83,.96,.73,.09,0,.84,.6,.33,.52,.93,.72,0,.39,.4,.81,.73,.19,.27,.08,.17,.58,.55,.02,.08,.9,.5,.33,.78,.59,.87,.85,0,.75,.82,.51,.64,.43,.41,.63,.94,.66,.7,.23,.37,.15,.71,.26,.8,.76,.61,.85,.46,.85,.88,.66,.13,.94,.2,.87,.61,.58,.96,.62,.15,.61,.54,.17,1,.81,.02,.95,.85,.02,.09,.79,.63,.89,0,.96,.27,0,.46,.79,.02,.12,.81,.52,.99,.53,.2,0,.95,.02,.68,.92,.59,.53,.6,.6,.39,0,.22,.39,.47,.14,.39,.99,.46,.7,.01,.37,.22,.01,.77,0,.6,.73,.08,.76,.57,.99,.92,.15,.83,.48,.69,.61,.57,.28,.88,.6,.6,0,.52,0,.56,.5,.76,.64,.28,.03,.75,.48,.23,.8,.36,.59,.01,.79,.23,.96,.74,.9,.84,.95,.07,.89,.73,.89,.57,.78,.51,.25,.16,.2,.71,.81,.3,.68,.97,.53,.39,.64,.54,.4,.62,.62,.97,.84,.88,.73,.95,.15,.25,0,0,.8,.88,.07,.01,.64,.94,.35,.43,.96,.89,.37,0,.05,.51,0,.86,.46,.83,.58,.63,.94,.07,.89,.36,.8,.16,.32,.98,.76,.97,.03,.19,.71,.02,.2,.13,.13,.33,0,.86,.97,.01,.44,.55,.01,.73,.33,.07,1,.49,.59,.43,.51,.96,.45,.37,.77,.73,.78,.68,0,.8,.9,.64,.07,.79,.44,.18,.92,.5,.34,.06,.47,.1,.97,.76,.14,.07,0,.28,.78,.91,.92,.43,.44,.63,.42,1,.59,.98,.4,.39,.22,0,.84,.8,.39,.03,.14,.59,.2,.4,.01,.32,.4,.73,0,0,.65,.07,.24,.01,.72,0,.92,.03,.67,.03,.89,.44,.03,.37,.89,.73,.99,.24,.73,.86,.07,.26,0,.86,.45,0,.19,.9,.01,.93,.69,.7,.75,.73,.41,.98,.85,.06,.3,.68,.28,.36,.35,0,.29,0,.01,.35,.63,.69,.32,.97,.07,.95,.44,.3,0,1,0,.76,.36,0,.02,.66,.05,.09,0,.7,.54,.69,.67,.84,.01,.36,.04,.03,.71,.1,.47,.01,.55,0,.77,.92,.14,0,.57,.51,0,.31,.52,0,.38,.08,.37,.02,.76,.02,.52,0,0,.34,.35,.6,.74,.98,.19,.62,.4,.81,.57,.72,0,.26,.82,.21,.11,.03,0,.05,0,.77,.59,.62,.93,.52,.03,.72,.89,.68,0,.1,.2,0,.64,.04,.9,.8,.11,.7,.44,.06,.34,.91,.92,.52,.06,.15,.64,.64,.01,.45,.11,.53,.47,0,.73,.82,.76,.03,0,.63,0,.54,.67,.7,0,.62,.02,.85,.39,.38,.6,.92,.89,.43,.92,.57,.49,.07,.93,.32,.84,.86,.72,.5,.67,.49,.2,.74,.61,.42,.78,.67,.41,0,.49,.27,.4,.58,.28,.23,.64,.69,.19,.91,.04,.72,.39,.41,.02,.84,.61,.15,0,.09,0,0,.07,.7,.81,.62,0,.1,.17];export{a as pvalData};
